import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d_server from "../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_parse_result from "astn/dist/interface/generated/pareto/schemas/authoring_parse_result/data_types/target"
import * as d_parse_tree from "astn/dist/interface/generated/pareto/schemas/authoring_parse_tree/data_types/target"

type Signature = _et.Deprecated_Refiner_Catcher<string, null, d_server.Seal_Parameters>

//dependencies
import * as t_ast_2_json from "astn/dist/implementation/algorithms/transformers/authoring_parse_tree/json_target" //FIXME this should be sealed target
import * as s_json from "pareto-json/dist/exceptional/serializers/json"
import * as r_parse from "astn/dist/implementation/algorithms/refiners/authoring_parse_tree/text/refiners"


export const $$: Signature = ($) => _ea.create_refinement_context<d_parse_tree._T_Document, d_parse_result.Parse_Error>((abort) => r_parse.Document(
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