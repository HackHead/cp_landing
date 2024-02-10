import { Card } from "@/components/atoms/card";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type MetricProps = {
    subTitle: string;
    title: string;
    data: string;
} & HTMLAttributes<HTMLDivElement>
export default function Metric({
    data,
    subTitle,
    title,
    className,
}: MetricProps) {
    return (
        <Card className={cn('space-y-4', className)}>
            <div className="text-center text-white font-medium uppercase">{subTitle}</div>
            <div className="text-center text-primary font-bold text-4xl">{data}</div>
            <div className="text-center text-white font-medium uppercase">{title}</div>
        </Card>
    )
}