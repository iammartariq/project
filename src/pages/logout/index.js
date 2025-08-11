
import React from 'react'
import Layout from '../layout'
import LogOut from '@/components/logout/LogOut'

const index = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
                <Layout>
                    <div className="flex flex-col justify-center items-center mt-[115px]">
                        <LogOut />
                    </div>
                </Layout>
            </div>

        </div>
    )
}

export default index