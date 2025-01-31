import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const cardData = [
  {
    image: "/anil-hombal.jpg",
    title: "CA. Anil B. Hombal (FCA)",
    description:
      "A highly experienced Chartered Accountant with 22 years of expertise in finance, auditing, and tax planning. Known for providing innovative solutions, maintaining compliance, and fostering long-term business success with dedication and excellence.",
  },
  {
    image: "/kirankumar.jpg",
    title: "CA. Kirankumar N. Shavi (FCA)",
    description:
      "A dynamic Chartered Accountant with 5 years of experience specializing in taxation and compliance. Despite a relatively short career, he has shown exceptional understanding of tax laws, regulations, and compliance requirements.",
  },
  {
    image: "/mahesh-hindi.jpg",
    title: "CA Mahesh B Hindi (ACA)",
    description:
      "He is with 4 years of expertise in accounting, auditing, and taxation. He has represented before the Income Tax Tribunal, delivers precise financial solutions, ensures compliance, and drives business growth with integrity and strategic insights.",
  },
  {
    image: "/jagadish.jpg",
    title: "Mr. Jagdish Bidarur (CTPr)",
    description:
      "A seasoned Chartered Tax Practitioner with 20 years of experience, specializing in complex tax strategies, compliance, and advisory services. Known for deep expertise in tax laws and delivering strategic financial solutions.",
  },
];

export default function MediaCard() {
  return (
    <div className="flex dark:bg-gray-900 flex-col md:flex-row flex-wrap justify-center items-center gap-6 p-4">
      {cardData.map((card, index) => (
        <Card
          key={index}
          sx={{ maxWidth: 345 }}
          className="h-full flex flex-col mx-auto"
        >
          <CardMedia
            sx={{ height: 400 }}
            image={card.image}
            title={card.title}
          />
          <CardContent className="flex-grow">
            <Typography gutterBottom variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
