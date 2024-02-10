import Metric from "@/components/molecules/metric";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type MetricsGroupProps = HTMLAttributes<HTMLDivElement>
export default function MetricsGroup({
    className
}: MetricsGroupProps) {
    return (
        <section className={cn("grid grid-cols-3 gap-2", className)}>
            <Metric
                data="14+"
                subTitle="Over"
                title="Currencies"
            />
            <Metric
                data="200+"
                subTitle="Over"
                title="Countries"
            />
            <Metric
                data="2-3"
                subTitle="Account opening"
                title="Days"
            />
        </section>
    )
}