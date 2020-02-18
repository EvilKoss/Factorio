import Present from './Present';
import {connect} from 'react-redux';
import {changeCopper,changeMetal,changeCoal,changeStone,changeMinStone} from './Reducer';
import {changeFurCop,changeFurMet,changeFurStone,changeMinCop,changeMinMet,changeMinCoal} from './Reducer';
import {changeCopperPlate,changeMetalPlate,changeStoneBrick} from './Reducer';

const mapStateToProps = (state) => {
	return{
		res: state.resources.resources,
		build: state.buldings.buldings
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		BuyMinerCop: (copper,metal,minerCopper) => {
			dispatch(changeCopper(copper));
			dispatch(changeMetal(metal));
			dispatch(changeMinCop(minerCopper));
		},
		BuyMinerMet: (copper,metal,minerMetal) => {
			dispatch(changeCopper(copper));
			dispatch(changeMetal(metal));
			dispatch(changeMinMet(minerMetal));
		},
		BuyMinerCoal: (copper,metal,minerCoal) => {
			dispatch(changeCopper(copper));
			dispatch(changeMetal(metal));
			dispatch(changeMinCoal(minerCoal));
		},
		BuyMinerStone: (copper,metal,minerStone) => {
			dispatch(changeCopper(copper));
			dispatch(changeMetal(metal));
			dispatch(changeMinStone(minerStone));
		},


		BuyFurnaceCop: (stone,metal,furnaceCopper) => {
			dispatch(changeStone(stone));
			dispatch(changeMetal(metal));
			dispatch(changeFurCop(furnaceCopper));
		},
		BuyFurnaceMet: (stone,metal,furnaceMetal) => {
			dispatch(changeStone(stone));
			dispatch(changeMetal(metal));
			dispatch(changeFurMet(furnaceMetal));
		},
		BuyFurnaceStone: (stone,metal,furnaceStone) => {
			dispatch(changeStone(stone));
			dispatch(changeMetal(metal));
			dispatch(changeFurStone(furnaceStone));
		},


		Time: (copper,metal,coal,stone,copperPlate,metalPlate,stoneBrick) => {
				dispatch(changeCopper(copper));
				dispatch(changeMetal(metal));
				dispatch(changeCoal(coal));
				dispatch(changeStone(stone));
				dispatch(changeCopperPlate(copperPlate));
				dispatch(changeMetalPlate(metalPlate));
				dispatch(changeStoneBrick(stoneBrick));
		}
	}
}

const Container = connect(mapStateToProps,mapDispatchToProps)(Present);

export default Container;
