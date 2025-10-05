import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import * as D_Resources from "exupery-resources/dist/types"
import * as D_server from "../vscode_server_data_types"


import { $$ as p_log_error } from "exupery-resources/dist/procedures/log_error"
import { $$ as p_log } from "exupery-resources/dist/procedures/log"
import { $$ as q_convert_to_json } from "../queries/convert_to_json"
import { $$ as q_read_file } from "exupery-resources/dist/queries/read_file"
import { $$ as q_on_completion } from "../queries/on_completion"

export const $$: _eb.Unguaranteed_Main_Initializer = () => _easync.up.sequence([
    _easync.up.action(
        _easync.upi.g(p_log),
        _easync.uq.u(
            q_convert_to_json,
            _easync.uq.fixed({
                'content': "{ CONVERT_TO_JSON : x} "
            }),
            _easync.ut.g(($) => ({
                'lines': _ea.array_literal([$])
            })),
            _easync.gt.g(($): _eb.Error => ({
                'exit code': 1
            })),
            _easync.eh(
                p_log_error,
                ($) => ({
                    'lines': _ea.array_literal([
                        "not a valid ASTN document",
                    ])
                })

            )
        ),
    ),
    _easync.up.action(
        _easync.upi.g(p_log),
        _easync.uq.g(
            //the query
            q_on_completion,
            //parameters
            _easync.uq.u(
                q_read_file,
                _easync.uq.fixed({
                    'path': "../pareto/data/test/pareto_modules/pareto-json.astn",
                    'escape spaces in path': true,
                }),
                _easync.ut.g(($) => ({
                    'content': $,
                    'file path': "../pareto/data/test/pareto_modules/pareto-json.astn",
                    'indent': "    ",
                    'position': {
                        'line': 1,
                        'character': 1,
                    },
                    // 'position': { //a number
                    //     'line': 44,
                    //     'character': 65,
                    // }
                })),
                ($): _eb.Error => ({
                    'exit code': 1,
                }),
                ($): D_Resources.Log_Parameters => ({
                    'lines': _ea.array_literal([
                        "file does not exist",
                    ])
                })
            ),
            //result transformation
            _easync.ut.g(($): D_Resources.Log_Parameters => ({
                'lines': $['completion items'].map(($) => $['label'])
            })),
        ),
    )
])