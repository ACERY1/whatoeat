import Home from '../pages/Home'
import HomeChild1 from '../pages/HomeChild1'
import HomeChild2 from '../pages/HomeChild2'

const routerConfig = [
	{
		path: '/home',
		component : Home,
		children: [
			{
				path: '/c1', // The Final Path is '/home/c1'
				component : HomeChild1,
			},
			{
				path: '/c2',
				component : HomeChild2,
			}
		]
	}
]

export default routerConfig