import * as _easync from 'exupery-core-async'
import * as _et from 'exupery-core-types'
import * as _ea from 'exupery-core-alg'

import * as d from "../../interface/generated/pareto/schemas/server/data_types/source"
import * as d_read_file from "exupery-resources/dist/interface/generated/pareto/schemas/read_file/data_types/source"
import * as d_load_pareto_document from "pareto/dist/interface/algorithms/queries/load_pareto_document"


export type Resources = {
	'read file': _et.Query<d_read_file.Result, d_read_file.Error, d_read_file.Parameters>
}

type Signature = _et.Query_Function<_et.Query<d.On_Hover_Result, d_load_pareto_document.Error, d.On_Hover_Parameters>, Resources>

import { Signature as x } from "../../interface/algorithms/queries/on_hover"

//dependencies
import { $$ as q_load_pareto_document } from "pareto/dist/implementation/queries/load_pareto_document"
import * as t_find_hover_texts from "../transformers/schemas/temp/get_hover_texts"
import * as t_backend_location from "../transformers/schemas/server/backend_location"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/node_path"

export const $$: Signature = _easync.create_query_function(
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
	).transform_result(($): d.On_Hover_Result => ({
		'contents': {
			'hover texts': t_find_hover_texts.Node($, {
				'location': t_backend_location.Relative_Location($p.position),
				'full path': ``,
				'id path': ``,
			})
		}
	}))
)