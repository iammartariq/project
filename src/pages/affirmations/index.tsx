import React from 'react'
import Layout from '../layout'
import Affirmations from '@/components/affirmations/Affirmations'

const AffirmationsPage: React.FC = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/Affirmation.png)] bg-cover bg-center h-screen">
                <Layout>
                    <div className=" sm:mt-[48px] mt-[27px] xl:pr-[158px] lg:pr-[44px] lg:px-0 sm:px-[20px] px-[30px] xl:pl-[116px]">
                        <Affirmations />
                    </div>
                </Layout>
            </div>

        </div>
    )
}

export default AffirmationsPage