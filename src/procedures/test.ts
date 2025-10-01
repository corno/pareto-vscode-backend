#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as cmd_log_error } from "exupery-resources/dist/actions/log_error"
import { $$ as cmd_log } from "exupery-resources/dist/actions/log"
import { $$ as q_convert_to_json } from "../queries/convert_to_json"


export const $$: _eb.Unguaranteed_Main = () => q_convert_to_json({
    'content': "{ FSDFSDFSD : x} "
}).process(
    ($i, $) => {
        return $i.execute(() => cmd_log_error(
            _ea.array_literal([
                "not a valid ASTN document",
            ])
        ))
    },
    ($) => ({
        'exit code': 1,
    }),
    ($i, $) => {
        return $i.execute(() => cmd_log(_ea.array_literal([
            $
        ])))
    },
)
