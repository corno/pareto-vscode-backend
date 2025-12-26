import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as signatures from "../../interface/signatures"

//data types
import * as d from "../../interface/generated/pareto/schemas/server/data_types/source"

//dependencies
import { $$ as q_load_pareto_document } from "pareto/dist/implementation/queries/load_pareto_document"
import * as t_find_completion_items from "../transformers/schemas/temp/get_completion_items"
import * as t_backend_location from "../transformers/schemas/server/backend_location"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/node_path"


export const $$: signatures.queries.on_completion = _easync.create_query_function(
    ($p, $qr) => q_load_pareto_document($qr)(
        {
            'content': $p.content,
            'file path': ds_path.Node_Path(
                $p['file path'],
                {
                    'pedantic': true,
                },
                () => _ea.deprecated_panic("Invalid file path"),
            ),
        },
        ($) => $,
    ).transform_result(($): d.On_Completion_Result => ({
        'completion items': t_find_completion_items.Node($, {
            'location': t_backend_location.Relative_Location($p.position),
            'indent': $p.indent,
        }).transform(
            ($) => $,
            () => _ea.list_literal([]),
        )
    }))
)