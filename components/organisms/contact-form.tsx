'use client';
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';


export default function ContactForm() {
    return (
        <form action="" className="space-y-3">
            <Input
                placeholder="Name"
            />
            <Input
                placeholder="Surname"
            />
            <Input
                placeholder="Company name"
            />
            <Input
                type="Email"
                placeholder="Email"
            />
            <Input
                type="Email"
                placeholder="Country"
            />
            <PhoneInput
                placeholder="Enter phone number"
                className="rounded-md text-dark"
                inputClassName=" font-medium flex h-12 w-full rounded-md outline-primary border border-input-border text-dark bg-background px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-input-text disabled:cursor-not-allowed disabled:opacity-50"
                countrySelectorStyleProps={{
                    buttonClassName: 'hover:bg-black no-scrollbar !pr-0 rounded-md',
                    buttonContentWrapperClassName: 'px-4',
                    dropdownStyleProps: {
                        className: 'border-none outline-none',
                        listItemClassName:
                            'bg-darkest text-lightGray hover:!bg-black focus:!bg-black focus:!text-white hover:!text-white',
                    },
                }}
                defaultCountry="af"
            />
            <Input
                type="Email"
                placeholder="Phone number"
            />
            <div className="flex justify-center">
                <Button type="submit" className="font-extrabold text-primary bg-dark h-14 min-w-72 mx-auto my-6 uppercase hover:bg-white/50 hover:text-dark duration-300">Open an account</Button>
            </div>
        </form>
    )
}