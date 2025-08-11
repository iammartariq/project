import Tab from '@/components/Commen/Tab'
import Layout from '@/pages/layout'
import React from 'react'

const ChangedPasswordPage: React.FC = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
                <Layout>
                    <div className="pt-[56px] xl:pl-[52px] xl:px-0 px-[18px] xl:pr-[84px] pb-[110px]">
                        <Tab />
                    </div>
                </Layout>
            </div>
        </div>
    )
}

export default ChangedPasswordPage