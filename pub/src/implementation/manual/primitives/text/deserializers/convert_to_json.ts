import * as _pds from 'pareto-core-deserializer'
import * as _pi from 'pareto-core-interface'

import * as d_server from "../../../../../interface/generated/pareto/schemas/server/data_types/source"

type Signature = _pi.Deserializer_With_Parameters<string, null, d_server.Convert_To_JSON_Parameters>

//dependencies
import * as t_ast_2_json from "astn/dist/implementation/manual/schemas/authoring_parse_tree/transformers/json_target"
import * as s_json from "pareto-json/dist/implementation/manual/schemas/json/serializers"
import * as ds_authoring_parse_tree from "astn/dist/implementation/manual/schemas/authoring_parse_tree/deserializers"


export const $$: Signature = ($, abort, $p,) => s_json.Document(
    t_ast_2_json.Document(
        ds_authoring_parse_tree.Document(
            $,
            ($) => abort(null),
            {
                'tab size': 1,
            },
        )
    ),
    {
        'indentation': "    ",
        'newline': '\n'
    }
)