import Tab from '@/components/Commen/Tab'
import Layout from '@/pages/layout'
import React from 'react'

const index = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
                <Layout>
                    <div className="pt-[56px] md:pl-[52px] md:px-0 px-[18px] md:pr-[84px] pb-[110px]">
                        <Tab />
                    </div>
                </Layout>
            </div>

        </div>

    )
}

export default index