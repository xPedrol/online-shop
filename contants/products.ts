import {TProduct} from "../models/Product";
const baseUrl = "/products";
export const constProducts: TProduct[] = [
    {
        id: 1,
        name: "T-Shirt 1",
        price: 100,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/blusa1.webp`,
        tag: "T-Shirt"
    },
    {
        id: 2,
        name: "T-Shirt 2",
        price: 200,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/blusa2.webp`,
        tag: "T-Shirt"
    },
    {
        id: 3,
        name: "Tennis 1",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/tenis1.webp`,
        tag: "Tennis"
    },
    {
        id: 4,
        name: "Tennis 2",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/tenis2.webp`,
        tag: "Tennis"
    },
    {
        id: 5,
        name: "Jacket 1",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/jacket1.webp`,
        tag: "Jacket"
    },
    {
        id: 6,
        name: "Watch 1",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/watch1.webp`,
        tag: "Watch"
    },
    {
        id: 7,
        name: "Watch 2",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/watch2.webp`,
        tag: "Watch"
    },
    {
        id: 8,
        name: "Watch 3",
        price: 300,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod, nisi vel consectetur interdum, nunc nisi aliquam nisi, euismod aliquam nisi nisi vel consectetur interdum.",
        image: `${baseUrl}/watch3.webp`,
        tag: "Watch"
    }
];