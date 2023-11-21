"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const db = new client_1.PrismaClient();
function getProducts() {
    return [
        {
            id: 'd15a5307-28b9-4ee1-b55d-fc0472288438',
            name: 'Snow Grips',
            price: 150,
            shortDescription: 'For winter speed hiking on icy, snowy and mixed terrain.',
            description: 'Engineered to adapt to all types of footwear, it makes it possible to move rapidly over ice and snow-pack.',
            mainImage: 'snowgrips.jpg',
        },
        {
            id: '1d619780-671c-4ecf-a70a-c0a1d0236783',
            name: 'Crampons',
            price: 450,
            shortDescription: 'All-round lightweight twelve-point crampons Singing Rock Fakir II for classic mountaineering.',
            description: 'They feature curved anti-balling plates on the underside to prevent snow from sticking and these can even be replaced if necessary.',
            mainImage: 'crampons.jpg',
        },
        {
            id: '7a0b1907-c277-4672-bd16-61c88a542234',
            name: 'Ice Axe',
            price: 50,
            shortDescription: 'Lightweight ice axe for technical mountaineering.',
            description: 'Lightweight ice axe for technical mountaineering. Compromise between classical ice axe and modern technical tool. The performance of this tool is situated between classical ice axe and modern technical tool.',
            mainImage: 'iceaxe.jpg',
        },
        {
            id: 'dcffd35a-d218-4712-b9e1-d78fbcf70929',
            name: 'Quick link',
            price: 30,
            shortDescription: 'Quick link Petzl for installing a retrieval system on the Fifi hook. ',
            description: 'Hanger anti-rotation system: textured back keeps the hanger from turning when the anchor is being installed or when it is heavily laterally loaded during use ',
            mainImage: 'quicklink.jpg',
        },
        {
            id: 'fc119b9d-29db-4a93-8319-8861c8a7f6d6',
            name: 'Helmet',
            price: 260,
            shortDescription: 'Replacement shell provided with clip for Climbing Technology Moon helmets.',
            description: 'The Toxooo 3.0 is the updated version classic climbing helmet. This simple, functional, robust and comfortable helmet offers all-round impact absorption and good ventilation. With a dial-adjust fitting system and made with recycled EPS material.',
            mainImage: 'helmet.jpg',
        },
        {
            id: '20c43325-24ed-4270-a0a9-b87273407a59',
            name: 'Backpack',
            price: 450,
            shortDescription: 'Made for fast mountain adventures',
            description: 'The light Traverse 16 Unisex is a blend of running vest and backpack.',
            mainImage: 'backpack.jpg',
        },
        {
            id: '170d6e77-bfd3-492b-9677-0458395085ac',
            name: 'Headlamp',
            price: 150,
            shortDescription: 'Ultra-powerful, lightweight rechargeable headlamp',
            description: 'Headlamp is battery-powered and can serve as your lighting companion in a multitude of tasks.',
            mainImage: 'headlamp.jpg',
        },
        {
            id: '6e9e8112-befd-4a09-9d60-4e4b43649388',
            name: 'pocket knife',
            price: 90,
            shortDescription: 'Small and elegant, this pocket tool.',
            description: 'For more than a century, the Classic SD has been an icon of sleek functionality. With a selection of matching accessories to complete the look, it’s the easiest lifetime commitment you’ll ever make.',
            mainImage: 'pocketknife.jpg',
        },
        {
            id: '61c1e62b-69b6-494c-9811-609cf4acf64d',
            name: 'Trekking pole',
            price: 175,
            shortDescription: 'Premium trekking pole',
            description: 'An excellent compromise 3 parts for the first timers in the world of trekking',
            mainImage: 'pole.jpg',
        },
        {
            id: '2236324c-ab99-4449-bc99-995a426f7408',
            name: 'Stove',
            price: 320,
            shortDescription: 'Portable outdoor stove combined with pot.',
            description: 'Portable outdoor stove combined with pot. Integrated heat exchanger and windscreen maximize heat efficiency, saves gas.',
            mainImage: 'stove.jpg',
        },
    ];
}
async function clearDatabase() {
    await db.product.deleteMany({});
    await db.order.deleteMany({});
    await db.orderProduct.deleteMany({});
    await db.user.deleteMany({});
    await db.password.deleteMany({});
    console.log('clear');
}
async function seed() {
    clearDatabase();
    await Promise.all(getProducts().map((product) => {
        return db.product.create({ data: product });
    }));
    console.log('Seed completed successfully.');
}
seed();
//# sourceMappingURL=seed.js.map