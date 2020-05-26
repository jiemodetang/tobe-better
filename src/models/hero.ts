import { Effect, Reducer, Subscription,request } from 'umi';


export interface HeroModelState {
    name: string;
    heros: any,
}

export interface HeroModelType {
    namespace: 'hero';
    state: HeroModelState;
    effects: {
        query: Effect;
        fetch: Effect;
    };
    reducers: {
        save: Reducer<HeroModelState>;
    };
    subscriptions: { setup: Subscription };
}

const HeroModel: HeroModelType = {
    namespace: 'hero',

    state: {
        name: 'hero',
        heros: {},
    },

    effects: {
        *query({ payload }, { call, put }) {

        },
        *fetch({ type, payload }, { put, call, select }) {
            const data = yield request('/images/lol/act/img/js/heroList/hero_list.js',{
                method: 'GET',
                headers: {
                },
               
              })
            const localData = [
                {
                    name: 105,
                    cname: '廉颇',
                    title: '正义爆轰',
                    new_type: 0,
                    hero_type: 3,
                    skin_name: '正义爆轰|地狱岩魂',
                },
                {
                    name: 106,
                    cname: '小乔',
                    title: '恋之微风',
                    new_type: 0,
                    hero_type: 2,
                    skin_name: '恋之微风|万圣前夜|天鹅之梦|纯白花嫁|缤纷独角兽',
                },
            ];
            yield put({
                type: 'save',
                payload: {
                    heros: data ||localData,
                },
            });
        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                ...action.payload,
            };
        },
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname }) => {
                if (pathname === '/hero') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },

};

export default HeroModel;