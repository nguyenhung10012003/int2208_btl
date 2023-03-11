import Sections from "./Sections";

function Home() {
    const data = [
        {
            title: 'New',
            cards:
                [
                    { title: 'abc', img: 'holder.js/100px160' },
                    { title: 'abc', img: 'holder.js/100px160' },
                    { title: 'abc', img: 'holder.js/100px160' },
                    { title: 'abc', img: 'holder.js/100px160' }
                ]
        },
        {
            title: 'New',
            cards:
                [
                    { title: 'abc', img: 'holder.js/100px160' },
                    { title: 'abc', img: 'holder.js/100px160' },
                    { title: 'abc', img: 'holder.js/100px160' },
                    { title: 'abc', img: 'holder.js/100px160' }
                ]
        }
    ]

    return (

        <Sections data={data} />

    );
}

export default Home;