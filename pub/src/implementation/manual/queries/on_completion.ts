import * as _p from 'pareto-core-query'
import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/generated/pareto/schemas/server/data_types/source"

//dependencies
import { $$ as q_load_pareto_document } from "pareto/dist/implementation/manual/queries/load_pareto_document"
import * as t_find_completion_items from "../schemas/temp/transformers/get_completion_items"
import * as t_backend_location from "../schemas/server/transformers/backend_location"
import * as ds_path from "pareto-resources/dist/implementation/manual/schemas/node_path/deserializers"


export const $$: signatures.queries.on_completion = _p.query_function(
    ($p, $qr) => q_load_pareto_document($qr)(
        {
            'content': $p.content,
            'file path': ds_path.Node_Path(
                $p['file path'],
                () => _pinternals.panic("Invalid file path"),
                {
                    'pedantic': true,
                },
            ),
        },
        ($) => $,
    ).transform_result(($): d.On_Completion_Result => ({
        'completion items': t_find_completion_items.Node($, {
            'location': t_backend_location.Relative_Location($p.position),
            'indent': $p.indent,
        }).transform(
            ($) => $,
            () => _pt.list_literal([]),
        )
    }))
)