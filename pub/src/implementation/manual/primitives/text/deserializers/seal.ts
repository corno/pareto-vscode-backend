import * as _pi from 'pareto-core/dist/interface'
import * as _p from 'pareto-core/dist/deserializer'

type Signature = _pi.Deserializer_With_Parameters<string, null, d_server.Convert_To_JSON_Parameters>

import * as d_server from "../../../../../interface/generated/pareto/schemas/server/data"

//dependencies
import * as t_authoring_parse_tree_2_sealed_ast from "astn/dist/implementation/manual/schemas/parse_tree/transformers/json_target" //FIXME this should be sealed target
import * as s_json from "pareto-json/dist/implementation/manual/schemas/json/serializers"
import * as ds_authoring_parse_tree from "astn/dist/implementation/manual/schemas/parse_tree/deserializers"

export const $$: Signature = ($, abort, $p) => s_json.Document(
    t_authoring_parse_tree_2_sealed_ast.Document(
        ds_authoring_parse_tree.Document(
            $,
            ($) => abort(null),
            {
                'tab size': 1,
            },
        )
    ),
    {
        'indentation': ``,
        'newline': `\n`,
    }
)