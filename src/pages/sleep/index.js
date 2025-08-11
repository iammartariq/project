import React from 'react'
import Layout from '../layout'
import Sleep from '@/components/sleep/Sleep'

const index = () => {
    return (
        <div>
            <div className="bg-[url(/assets/images/sleep/Backgrounds.png)]">
                <Layout>
                    <div className=" sm:mt-[48px] mt-[27px] xl:pr-[158px] lg:pr-[44px] lg:px-0 sm:px-[20px] px-[30px] xl:pl-[116px]">
                        <Sleep />
                    </div>
                </Layout>
            </div>

        </div>
    )
}

export default index