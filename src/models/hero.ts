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
            yield put({
                type: 'save',
                payload: {
                    heros: data  
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