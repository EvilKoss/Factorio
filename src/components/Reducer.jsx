const CHANGECOPPER = 'CHANGECOPPER';
const CHANGEMETAL = 'CHANGEMETAL';
const CHANGECOAL = 'CHANGECOAL';
const CHANGESTONE = 'CHANGESTONE';

const CHANGECOOPERPALTE = 'CHANGECOOPERPALTE';
const CHANGEMETALPALTE = 'CHANGEMETALPALTE';
const CHANGESTONEBRICK = 'CHANGESTONEBRICK';

const CHANGEFURCOP = 'CHANGEFURCOP';
const CHANGEFURMET = 'CHANGEFURMET';
const CHANGEFURSTONE = 'CHANGEFURSTONE';

const CHANGEMINCOP = 'CHANGEMINCOP';
const CHANGEMINMET = 'CHANGEMINMET';
const CHANGEMINCOAL = 'CHANGEMINCOAL';
const CHANGEMINSTONE = 'CHANGEMINSTONE';


const initialState = {
	resources:{copper:150,metal:150,coal:15,stone:20,copperPlate:1,metalPlate:2,stoneBrick:3},
	buldings:{furnaceCopper:1,furnaceMetal:2,furnaceStone:3,minerCopper:4,minerMetal:5,minerCoal:6,minerStone:0,}
}

const Reducer = (state = initialState, action) => {
	switch(action.type){
		case CHANGECOPPER:
			return{
				...state,resources:{...state.resources, copper:action.copper}
			}
		case CHANGEMETAL:
			return{
				...state,resources:{...state.resources, metal:action.metal}
			}
		case CHANGECOAL:
			return{
				...state,resources:{...state.resources, coal:action.coal}
			}
		case CHANGESTONE:
			return{
				...state,resources:{...state.resources, stone:action.stone}
			}

		case CHANGEFURCOP:
			return{
				...state,buldings:{...state.buldings, furnaceCopper:action.furnaceCopper}
			}
		case CHANGEFURMET:
			return{
				...state,buldings:{...state.buldings, furnaceMetal:action.furnaceMetal}
			}
		case CHANGEFURSTONE:
			return{
				...state,buldings:{...state.buldings, furnaceStone:action.furnaceStone}
			}

		case CHANGEMINCOP:
			return{
				...state,buldings:{...state.buldings, minerCopper:action.minerCopper}
			}
		case CHANGEMINMET:
			return{
				...state,buldings:{...state.buldings, minerMetal:action.minerMetal}
			}
		case CHANGEMINCOAL:
			return{
				...state,buldings:{...state.buldings, minerCoal:action.minerCoal}
			}
		case CHANGEMINSTONE:
			return{
				...state,buldings:{...state.buldings, minerStone:action.minerStone}
			}


		case CHANGECOOPERPALTE:
			return{
				...state,resources:{...state.resources, copperPlate:action.copperPlate}
			}
		case CHANGEMETALPALTE:
			return{
				...state,resources:{...state.resources, metalPlate:action.metalPlate}
			}
		case CHANGESTONEBRICK:
			return{
				...state,resources:{...state.resources, stoneBrick:action.stoneBrick}
			}

		default: return state;
	}
}

export const changeCopper = (copper) => ({type:CHANGECOPPER,copper:copper});
export const changeMetal = (metal) => ({type:CHANGEMETAL,metal:metal});
export const changeCoal = (coal) => ({type:CHANGECOAL,coal:coal});
export const changeStone = (stone) => ({type:CHANGESTONE,stone:stone});

export const changeCopperPlate = (copperPlate) => ({type:CHANGECOOPERPALTE,copperPlate:copperPlate});
export const changeMetalPlate = (metalPlate) => ({type:CHANGEMETALPALTE,metalPlate:metalPlate});
export const changeStoneBrick = (stoneBrick) => ({type:CHANGESTONEBRICK,stoneBrick:stoneBrick});

export const changeFurCop = (furnaceCopper) => ({type:CHANGEFURCOP,furnaceCopper:furnaceCopper});
export const changeFurMet = (furnaceMetal) => ({type:CHANGEFURMET,furnaceMetal:furnaceMetal});
export const changeFurStone = (furnaceStone) => ({type:CHANGEFURSTONE,furnaceStone:furnaceStone});

export const changeMinCop = (minerCopper) => ({type:CHANGEMINCOP,minerCopper:minerCopper});
export const changeMinMet = (minerMetal) => ({type:CHANGEMINMET,minerMetal:minerMetal});
export const changeMinCoal = (minerCoal) => ({type:CHANGEMINCOAL,minerCoal:minerCoal});
export const changeMinStone = (minerStone) => ({type:CHANGEMINSTONE,minerStone:minerStone});

export default Reducer;
