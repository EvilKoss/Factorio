import React from 'react';
import style from './Present.module.css';

const Present = (props) => {
	const furnaceCopper = props.build.furnaceCopper;
	const furnaceMetal = props.build.furnaceMetal;
	const furnaceStone = props.build.furnaceStone;

	const minerCopper = props.build.minerCopper;
	const minerMetal = props.build.minerMetal;
	const minerCoal = props.build.minerCoal;
	const minerStone = props.build.minerStone;

	const copper = props.res.copper;
	const metal = props.res.metal;
	const coal = props.res.coal;
	const stone = props.res.stone;
	const copperPlate = props.res.copperPlate;
	const metalPlate = props.res.metalPlate;
	const stoneBrick = props.res.stoneBrick;

	let sale = false;

	if (metal < 50 || copper < 50){
		sale = true;
	}
	else{sale = false};


	let saleFur = false;

	if (metal < 50 || stone < 50){
		saleFur = true;
	}
	else{saleFur = false};


	const buyMinerCopper = () => {
		props.BuyMinerCop(copper-50,metal-50,minerCopper+1);
	}
	const buyMinerMetal = () => {
		props.BuyMinerMet(copper-50,metal-50,minerMetal+1);
	}
	const buyMinerCoal = () => {
		props.BuyMinerCoal(copper-50,metal-50,minerCoal+1);
	}
	const buyMinerStone = () => {
		props.BuyMinerStone(copper-50,metal-50,minerStone+1);
	}


	const buyFurCopper = () => {
		props.BuyFurnaceCop(stone-50,metal-50,furnaceCopper+1);
	}
	const buyFurMetal = () => {
		props.BuyFurnaceMet(stone-50,metal-50,furnaceMetal+1);
	}
	const buyFurStone = () => {
		props.BuyFurnaceStone(stone-50,metal-50,furnaceStone+1);
	}


	let quantityCopper = copper;
	let quantityCopperPlate = copperPlate;
	let furnaceCopperCoal = 0;

	let quantityMetal = metal;
	let quantityMetalPlate = metalPlate;
	let furnaceMetalCoal = 0;

	let quantityStone = stone;
	let quantityStoneBrick = stoneBrick;
	let furnaceStoneCoal = 0;


	const time = () => {// проверять ни уходит ли она в минус, если ушла то останавливать производство
		if((copper + minerCopper)-furnaceCopper > 0 && coal >= furnaceCopper){
			quantityCopper = (copper + minerCopper)-furnaceCopper;
			quantityCopperPlate = copperPlate + furnaceCopper;
			furnaceCopperCoal = furnaceCopper;
		}
		else {
			quantityCopper = (copper + minerCopper);
			quantityCopperPlate = copperPlate;
			furnaceCopperCoal = 0;
		}

		if((metal + minerMetal)-furnaceMetal > 0 && coal >= furnaceMetal){
			quantityMetal = (metal + minerMetal)-furnaceMetal;
			quantityMetalPlate = metalPlate + furnaceMetal;
			furnaceMetalCoal = furnaceMetal;
		}
		else {
			quantityMetal = (metal + minerMetal);
			quantityMetalPlate = metalPlate;
			furnaceMetalCoal = 0;
		}

		if((stone + minerStone)-furnaceStone > 0 && coal >= furnaceStone){
			quantityStone = (stone + minerStone)-furnaceStone;
			quantityStoneBrick = stoneBrick + furnaceStone;
			furnaceStoneCoal = furnaceStone;
		}
		else {
			quantityStone = (stone + minerStone);
			quantityStoneBrick = stoneBrick;
			furnaceStoneCoal = 0;
		}


		const quantityCoal = (coal + minerCoal)-(furnaceCopperCoal+furnaceMetalCoal+furnaceStoneCoal);


		props.Time(quantityCopper,quantityMetal,quantityCoal,quantityStone,quantityCopperPlate,
			quantityMetalPlate,quantityStoneBrick);
	}

	return(
		<div className={style.rapper}>


			<div className={style.left}>
				<div>Шахта медная: {minerCopper}шт
					<button disabled={sale} onClick={buyMinerCopper}>купить:50медь,50Сталь</button>
				</div>
				<div>Шахта метала: {minerMetal}шт
					<button disabled={sale} onClick={buyMinerMetal}>купить:50медь,50Сталь</button>
				</div>
				<div>Шахта каменная: {minerStone}шт
					<button disabled={sale} onClick={buyMinerStone}>купить:50медь,50Сталь</button>
				</div>
				<div>Шахта угольная: {minerCoal}шт
					<button disabled={sale} onClick={buyMinerCoal}>купить:50медь,50Сталь</button>
				</div><br/>

				<div>Печь медная: {furnaceCopper}шт
					<button disabled={saleFur} onClick={buyFurCopper}>купить:50Сталь,50Камень</button>
				</div>
				<div>Печь металла: {furnaceMetal}шт
					<button disabled={saleFur} onClick={buyFurMetal}>купить:50Сталь,50Камень</button>
				</div>
				<div>Печь каменная: {furnaceStone}шт
					<button disabled={saleFur} onClick={buyFurStone}>купить:50Сталь,50Камень</button>
				</div><br/>

				<div>
					<button onClick={time}>добавить время</button>
				</div>
			</div>


			<div className={style.right}>
				<div>Медь: {copper}</div>
				<div>Сталь: {metal}</div>
				<div>Уголь: {coal}</div>
				<div>Камень: {stone}</div>

				<div>Медная плита: {copperPlate}</div>
				<div>Стальная плита: {metalPlate}</div>
				<div>Каменный блок: {stoneBrick}</div>
			</div>


		</div>
	)
}

export default Present;
