import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

export type FeatureProps = {
    label: string;
    icon: ReactNode;
} & HTMLAttributes<HTMLDivElement>
export default function Feature({
    icon,
    label,
    className,
    ...props
}: FeatureProps) {
    return (
        <div className={cn("space-y-3", className)} {...props}>
            <div className="flex justify-center">{icon}</div>
            <span className="inline-block w-full text-center font-medium">{label}</span>
        </div>
    )
}