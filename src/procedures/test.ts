#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as cmd_log_error } from "exupery-resources/dist/actions/log_error"
import { $$ as cmd_log } from "exupery-resources/dist/actions/log"
import { $$ as q_convert_to_json } from "../queries/convert_to_json"
import { $$ as q_read_file } from "exupery-resources/dist/queries/read_file"
import { $$ as q_on_completion } from "../queries/on_completion"


export const $$: _eb.Unguaranteed_Main = (
    $i, $
) => $i.process_unguaranteed_data(
    () => q_convert_to_json({
        'content': "{ CONVERT_TO_JSON : x} "
    }),
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
).process_unguaranteed_data(
    () => q_read_file(
        "../pareto/data/test/pareto_modules/pareto-json.astn", false

    ).then(($) => q_on_completion({
        'content': $,
        'file path': "../pareto/data/test/pareto_modules/pareto-json.astn",
        'indent': "    ",
        'position': {
            'line': 44,
            'character': 65,
        }
    })),
    ($i, $) => {
        return $i.execute(() => cmd_log_error(
            _ea.array_literal([
                "file does not exist",
            ])
        ))
    },
    ($) => ({
        'exit code': 1,
    }),
    ($i, $) => {
        return $i.execute(() => cmd_log($['completion items'].map(($) => $['label'])))
    },
)
