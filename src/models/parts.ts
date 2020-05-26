import { Effect, Reducer, Subscription,request } from 'umi';


export interface PartsModelState {
    name: string;
    parts: any,
}

export interface PartsModelType {
    namespace: 'parts';
    state: PartsModelState;
    effects: {
        query: Effect;
        fetch: Effect;
    };
    reducers: {
        save: Reducer<PartsModelState>;
    };
    subscriptions: { setup: Subscription };
}

const PartsModel: PartsModelType = {
    namespace: 'parts',

    state: {
        name: 'parts',
        parts: {},
    },

    effects: {
        *query({ payload }, { call, put }) {

        },
        *fetch({ type, payload }, { put, call, select }) {
            const data = yield request('/images/lol/act/img/js/items/items.js',{
                method: 'GET',
                headers: {
                },
               
              })
            yield put({
                type: 'save',
                payload: {
                    parts: data  
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
                if (pathname === '/parts') {
                    dispatch({
                        type: 'fetch'
                    })
                }
            });
        }
    },

};

export default PartsModel;