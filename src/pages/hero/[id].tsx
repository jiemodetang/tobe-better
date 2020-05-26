import React, { useState, useEffect } from 'react';
import { request } from 'umi'
export default function (props: { match: any; }) {
    const { match } = props
    // 进来的时候要调接口啊，然后用id去取，然后渲染
    console.log(match);
    useEffect(() => {
        request('/images/lol/act/img/js/hero/2.js').then(function(response) {
            console.log(response);
          })
    }, [])
    return (
        <div  >
            <h1>{match.params.id}</h1>
        </div>
    );
}