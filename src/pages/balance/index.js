import React from 'react'
import Layout from '../layout'
import Balance from '@/components/balance/Balance'

const index = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
                <Layout>
                    <div className=" mt-[88px] xl:pr-[129px] lg:pr-[44px] lg:px-0 sm:px-[20px] px-[30px] lg:pl-[44px]">
                        <Balance />
                    </div>
                </Layout>
            </div>

        </div>
    )
}

export default index