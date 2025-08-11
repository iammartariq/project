
import React from 'react'
import Layout from '../layout'
import Profile from '@/components/profile/Profile'

const index = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
                <Layout>
                    <div className="flex flex-col justify-center items-center mt-[129px] ">
                        <Profile />
                    </div>
                </Layout>
            </div>

        </div>
    )
}

export default index