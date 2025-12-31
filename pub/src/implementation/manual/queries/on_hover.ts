import * as _pq from 'pareto-core-query'
import * as _pi from 'pareto-core-interface'
import * as _pt from 'pareto-core-transformer'
import * as _pinternals from 'pareto-core-internals'

import * as signatures from "../../../interface/signatures"

//data types
import * as d from "../../../interface/generated/pareto/schemas/server/data_types/source"

//dependencies
import { $$ as q_load_pareto_document } from "pareto/dist/implementation/manual/queries/load_pareto_document"
import * as t_find_hover_texts from "../schemas/temp/transformers/get_hover_texts"
import * as t_backend_location from "../schemas/server/transformers/backend_location"
import * as ds_path from "exupery-resources/dist/implementation/deserializers/schemas/node_path"

export const $$: signatures.queries.on_hover = _pq.create_query_function(
	($p, $qr) => q_load_pareto_document($qr)(
		{
			'content': $p.content,
			'file path': ds_path.Node_Path(
				$p['file path'],
				{
					'pedantic': true,
				},
				() => _pinternals.panic("Invalid file path"),
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