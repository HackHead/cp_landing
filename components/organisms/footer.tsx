import { ReactNode } from "react"
import { v4 as uuid } from 'uuid'
import { Icons } from "../atoms/icons"
import Link from "next/link"

const SOCIAL_LINKS = [
    { id: uuid(), icon: <Icons.facebook className="hover:text-white w-6 h-6" />, url: '/' },
    { id: uuid(), icon: <Icons.linkedin className="hover:text-white w-6 h-6" />, url: '/' },
    { id: uuid(), icon: <Icons.instagram className="hover:text-white w-6 h-6" />, url: '/' },
    { id: uuid(), icon: <Icons.x className="hover:text-white w-6 h-6" />, url: '/' },
] as { id: string, icon: ReactNode, url: string }[]

export default function Footer() {
    return (
        <footer className="px-20 bg-dark font-medium text-white pt-20 pb-24">
            <FooterSocialLinksGroup />
            <div className="div mt-12">
                <div className="text-center">
                    <a className="" href="mailto:contact@collectnpay.com" rel="nofollow">contact@collectnpay.com</a>
                </div>
                <div className="text-center">
                    <a className="" href="tel:contact@collectnpay.com" rel="nofollow">+ 7 717 297 24 30</a>
                </div>
            </div>
            <div className="div mt-16 flex justify-center items-center">
                <div className="text-center">
                    <a className="underline hover:no-underline" href="https://landing.collectnpay.com/privacy-policy" target="_blank">Privacy policy</a>
                </div>

                <span>&nbsp;&#124;&nbsp;</span>
                <div className="text-center">
                    <a className="underline hover:no-underline" href="https://landing.collectnpay.com/terms-and-conditions" target="_blank">Terms & Conditions</a>
                </div>
            </div>
            <div className="flex justify-center mt-1">
                © Collect & Pay Ltd. 2020 - 2023
            </div>
            <p className="mt-16">
                Customers and individuals who are aggrieved about the services or products offered by COLLECT & PAY LTD or their staff
                may complain to contact@collectnpay.com. The Collect & Pay Ltd. is authorised by the financial regulator of the AIFC,
                Astana Financial Services Authority (&rsquo;AFSA&rsquo;) in accordance with the Acting Law of the AIFC, to conduct the activity(-ies)
                of Providing Money Services under the Licence No AFSA-A-LA-2022-0023 with no expiry date. The status of the licence and
                its validity may be verified at the <a href="https://publicreg.myafsa.com/roc/?form=Private%C2%A0Company&name=Collect+%26+Pay&bin_number=&reg_status=" className="hover:no-underline underline" rel="nofollow">AFSA website</a>. The COLLECT & PAY LTD. has also a registration at FinTRAC - MSB Registration
                System (Canada), the validity may be viewed at the <a href="https://www10.fintrac-canafe.gc.ca/msb-esm/public/detailed-information/msb-details/7b226d73624f72674e756d626572223a3136353031312c227072696d617279536561726368223a7b226f72674e616d65223a22434f6c6c656374202620506179222c2273656172636854797065223a317d7d/" rel="nofollow">FinTRAC website</a>.
            </p>
        </footer>
    )
}

function FooterSocialLinksGroup() {
    return (
        <div className="flex items-center justify-center space-x-4">
            {SOCIAL_LINKS.map((link) => (
                <Link href={link.url} key={link.id}>{link.icon}</Link>
            ))}
        </div>
    )
}