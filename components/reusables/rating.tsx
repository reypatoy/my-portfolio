import { Star } from "lucide-react";

export default function Rating({ rate }: { rate: number }) {

    return (
        <div className="flex gap-1">
           {[...Array(5)].map((_, i) => {
            if(i < rate) {
                return (
                    <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />

                )
            }
            return (
                    <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                    />

                )
           })}
        </div>
    )
}