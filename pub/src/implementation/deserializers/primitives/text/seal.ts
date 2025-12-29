import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'

type Signature = _pi.Deserializer_With_Parameters<string, null, d_server.Convert_To_JSON_Parameters>

import * as d_server from "../../../../interface/generated/pareto/schemas/server/data_types/source"

//dependencies
import * as t_authoring_parse_tree_2_sealed_ast from "astn/dist/implementation/transformers/schemas/authoring_parse_tree/json_target" //FIXME this should be sealed target
import * as s_json from "pareto-json/dist/implementation/serializers/schemas/json"
import * as ds_authoring_parse_tree from "astn/dist/implementation/deserializers/schemas/authoring_parse_tree"

export const $$: Signature = ($, $p, abort) => {
	return s_json.Document(
		t_authoring_parse_tree_2_sealed_ast.Document(
			ds_authoring_parse_tree.Document(
				$,
				{
					'tab size': 1,
				},
				($) => abort(null),
			)
		),
		{
			'indentation': ``,
			'newline': `\n`,
		}
	)

}