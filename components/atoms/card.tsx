import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react"

export type CardProps = {
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>
function Card({
    children,
    className
}: CardProps) {
    return (
        <div className={cn("bg-dark p-4 rounded-xl", className)}>
            {children}
        </div>
    )
}

export {
    Card,
}