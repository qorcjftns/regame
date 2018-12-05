import { createAction, handleActions } from 'redux-actions';

// 액션 타입을 정의해줍니다.
const MOVE_UP 		= 'game/MOVE_UP';
const MOVE_DOWN 	= 'game/MOVE_DOWN';
const MOVE_LEFT 	= 'game/MOVE_LEFT';
const MOVE_RIGHT 	= 'game/MOVE_RIGHT';

// 액션 생성 함수를 만듭니다.
export const moveUp 	= createAction(MOVE_UP);
export const moveDown 	= createAction(MOVE_DOWN);
export const moveLeft 	= createAction(MOVE_LEFT);
export const moveRight 	= createAction(MOVE_RIGHT);

// 모듈의 초기 상태를 정의합니다.
const initialState = {
	camera: {
		pos: { x: 0, y: 0 }
	}
};

// handleActions 의 첫번째 파라미터는 액션을 처리하는 함수들로 이뤄진 객체이고
// 두번째 파라미터는 초기 상태입니다.
export default handleActions({
	[MOVE_UP]: ({ camera }) 	=> ({ camera: {pos: { x: camera.pos.x, y: camera.pos.y + 1 } } }),
	// action 객체를 참조하지 않으니까 이렇게 생략을 할 수도 있겠죠?
	// state 부분에서 비구조화 할당도 해주어서 코드를 더욱 간소화시켰습니다.
	[MOVE_DOWN]: ({ camera }) 	=> ({ camera: {pos: { x: camera.pos.x, y: camera.pos.y - 1 } } }),
	[MOVE_LEFT]: ({ camera }) 	=> ({ camera: {pos: { x: camera.pos.x + 1, y: camera.pos.y } } }),
	[MOVE_RIGHT]: ({ camera }) 	=> ({ camera: {pos: { x: camera.pos.x - 1, y: camera.pos.y } } }),
}, initialState);