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

	const dsag = "кнопка не активная если не хватает ресурсов";

	const copper = props.res.copper;
	const metal = props.res.metal;
	const coal = props.res.coal;
	const stone = props.res.stone;
	const copperPlate = props.res.copperPlate;
	const metalPlate = props.res.metalPlate;
	const stoneBrick = props.res.stoneBrick;

	const sale = false;

	// if (metal < 50 && copper < 50){
	// 	return sale = true;
	// }
	// else{sale = false};


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

	const time = () => {
		const quantityCopper = copper + minerCopper;
		const quantityMetal = metal + minerMetal;
		const quantityCoal = (coal + minerCoal)-(furnaceCopper+furnaceMetal+furnaceStone);
		const quantityStone = stone + minerStone;
		const quantityCopperPlate = copperPlate + furnaceCopper;
		const quantityMetalPlate = metalPlate + furnaceMetal;
		const quantityStoneBrick = stoneBrick + furnaceStone;

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
					<button onClick={buyMinerMetal}>купить:50медь,50Сталь</button>
				</div>
				<div>Шахта каменая: {minerStone}шт
					<button onClick={buyMinerStone}>купить:50медь,50Сталь</button>
				</div>
				<div>Шахта угольная: {minerCoal}шт
					<button onClick={buyMinerCoal}>купить:50медь,50Сталь</button>
				</div><br/>

				<div onClick={buyFurCopper}>Печь медная: {furnaceCopper}шт
					<button>купить:50Сталь,50Камень</button>
				</div>
				<div onClick={buyFurMetal}>Печь метала: {furnaceMetal}шт
					<button>купить:50Сталь,50Камень</button>
				</div>
				<div onClick={buyFurStone}>Печь каменая: {furnaceStone}шт
					<button>купить:50Сталь,50Камень</button>
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
				<div>Сталая плита: {metalPlate}</div>
				<div>Каменый блок: {stoneBrick}</div>
			</div>


		</div>
	)
}

export default Present;
