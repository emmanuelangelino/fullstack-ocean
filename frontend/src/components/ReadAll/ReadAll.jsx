
import "./ReadAll.css";
import Card from "../Card/Card";

const itens = [
    {
        _id: "1",
        nome: "Bulbasaur",
        imagem: "https://archives.bulbagarden.net/media/upload/f/fb/0001Bulbasaur.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/7/74/GrassIC_Big.png",type2:"https://archives.bulbagarden.net/media/upload/3/3d/PoisonIC_Big.png",color:"#78C850"}
    },
    {
        _id: "2",
        nome: "Ivysaur",
        imagem: "https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/7/74/GrassIC_Big.png",type2:"https://archives.bulbagarden.net/media/upload/3/3d/PoisonIC_Big.png",color:"#78C850"}
    },
    {
        _id: "3",
        nome: "Venusaur",
        imagem: "https://archives.bulbagarden.net/media/upload/6/6b/0003Venusaur.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/7/74/GrassIC_Big.png",type2:"https://archives.bulbagarden.net/media/upload/3/3d/PoisonIC_Big.png",color:"#78C850"}
    },
    {
        _id: "4",
        nome: "Charmander",
        imagem: "https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/2/26/FireIC_Big.png",type2:"",color:"#F08030"}
    },
    {
        _id: "5",
        nome: "Charmeleon",
        imagem: "https://archives.bulbagarden.net/media/upload/0/05/0005Charmeleon.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/2/26/FireIC_Big.png",type2:"",color:"#F08030"}
    },
    {
        _id: "6",
        nome: "Charizard",
        imagem: "https://archives.bulbagarden.net/media/upload/3/38/0006Charizard.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/2/26/FireIC_Big.png",type2:"https://archives.bulbagarden.net/media/upload/c/cb/FlyingIC_Big.png",color:"#F08030"}
    },
    {
        _id: "7",
        nome: "Squirtle",
        imagem: "https://archives.bulbagarden.net/media/upload/5/54/0007Squirtle.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/5/56/WaterIC_Big.png",type2:"",color:"#6890F0"}
    },
    {
        _id: "8",
        nome: "Wartortle",
        imagem: "https://archives.bulbagarden.net/media/upload/0/0f/0008Wartortle.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/5/56/WaterIC_Big.png",type2:"",color:"#6890F0"}
    },
    {
        _id: "9",
        nome: "Blastoise",
        imagem: "https://archives.bulbagarden.net/media/upload/0/0a/0009Blastoise.png",
        tags: {type1:"https://archives.bulbagarden.net/media/upload/5/56/WaterIC_Big.png",type2:"",color:"#6890F0"}
    },
];

function ReadAll() {
    return <div className="ReadAll">
        {itens.map(function (item) {
            return <Card key={"card-"+item._id} item={item} />;
        })}
    </div>
}

export default ReadAll;