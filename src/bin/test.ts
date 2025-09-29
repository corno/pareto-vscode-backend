#!/usr/bin/env node

import * as _ea from 'exupery-core-alg'
import * as _eb from 'exupery-core-bin'
import * as _easync from 'exupery-core-async'

import { $$ as cmd_log_error } from "exupery-resources/dist/commands/log_error"
import { $$ as cmd_log } from "exupery-resources/dist/commands/log"
import { $$ as q_convert_to_json } from "../queries/convert_to_json"


_eb.run_unsafe_program(() => q_convert_to_json({
    'content': "{ FSDFSDFSD : x} "
}).process(
    ($) => cmd_log_error(
        _ea.array_literal([
            "not a valid ASTN document",
        ])
    ),
    () => 1,
    ($) => cmd_log(_ea.array_literal([
        $
    ])).cast_to_unsafe<number>(),
))
