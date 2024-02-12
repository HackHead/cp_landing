import Metric from "@/components/molecules/metric";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export type MetricsGroupProps = HTMLAttributes<HTMLDivElement>
export default function MetricsGroup({
    className
}: MetricsGroupProps) {
    return (
        <section className={cn("py-10 lg:py-32 bg-light-grey", className)}>
            <div className="max-w-6xl mx-auto gap-8 px-10 grid lg:grid-cols-3 lg:px-0 sm:px-5 md:px-3">
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
            </div>
        </section>
    )
}