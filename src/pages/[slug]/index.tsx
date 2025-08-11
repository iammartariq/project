import React from 'react'
import Layout from '../layout'
import AwakeningBalance from '@/components/awakening-balance/AwakeningBalance'

export default function index() {
    return (
        <div>
            <div className="bg-[url(/assets/images/renewme-home/home-bg.png)]">
                <Layout>
                    <div className="pt-[77px] xl:pl-[115px] md:px-0 px-[22px] xl:pr-[158px] md:pr-[44px] md:pl-[44px] lg:pl-0">
                        <AwakeningBalance />
                    </div>
                </Layout>
            </div>

        </div>
    )
}
