import * as _p from 'pareto-core/dist/query'
import * as _pi from 'pareto-core/dist/interface'
import * as _pdev from 'pareto-core-dev' //FIX, change 'file path' parameter from string to 'Node Path'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/generated/liana/schemas/server/data"

//dependencies
import { $$ as q_load_pareto_document } from "pareto-liana/dist/implementation/manual/queries/load_pareto_document"
import * as t_find_hover_texts from "../schemas/temp/transformers/get_hover_texts"
import * as t_backend_location from "../schemas/server/transformers/backend_location"
import * as ds_path from "pareto-resources/dist/implementation/manual/schemas/node_path/deserializers"

export const $$: signatures.queries.on_hover = _p.query_function(
	($p, $qr) => q_load_pareto_document($qr)(
		{
			'content': $p.content,
			'file path': ds_path.Node_Path(
				$p['file path'],
				() => _pdev.implement_me("Invalid file path"),
				{
					'pedantic': true,
				},
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