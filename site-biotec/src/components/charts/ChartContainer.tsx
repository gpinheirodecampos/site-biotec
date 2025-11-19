import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ChartContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function ChartContainer({ title, description, children }: ChartContainerProps) {
  return (
    <Card className="w-full h-full bg-card/50 backdrop-blur-sm border-border/50 shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent className="h-[350px] w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </CardContent>
    </Card>
  );
}
