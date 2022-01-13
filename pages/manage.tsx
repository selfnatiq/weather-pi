import React from 'react'
import { useRouter } from 'next/router'
import state from '../context/state'
import Loading from '../components/Loading'

const Manage: React.FC = () => {
	const { push } = useRouter()

	React.useEffect(() => {
		state.showManage = true
		push('/?from=manage')
	}, [])

	return <Loading />
}

export default Manage
