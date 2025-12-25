import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_server from "../../../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

type Signature = _et.Deprecated_Refiner_Catcher<string, null, d_server.Convert_To_JSON_Parameters>

//dependencies
import * as t_ast_2_json from "astn/dist/implementation/transformers/schemas/authoring_parse_tree/json_target"
import * as s_json from "pareto-json/dist/implementation/serializers/schemas/json"
import * as ds_authoring_parse_tree from "astn/dist/implementation/deserializers/schemas/authoring_parse_tree"


export const $$: Signature = ($) => _ea.create_refinement_context<d_parse_tree._T_Document, d_parse_result.Parse_Error>((abort) => ds_authoring_parse_tree.Document(
	$.content,
	{
		'tab size': 1,
	},
	abort,
)).deprecated_transform_error(
	($) => null
).transform_result(
	($): string => s_json.Document(
		t_ast_2_json.Document($),
		{
			'indentation': "    ",
			'newline': '\n'
		}
	),
)