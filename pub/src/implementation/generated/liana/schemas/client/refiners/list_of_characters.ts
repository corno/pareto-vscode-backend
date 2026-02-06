    
    import * as _p from 'pareto-core/dist/expression'
    
    import * as t_signatures from "../../../../../../interface/generated/liana/schemas/client/deserialize"
    
    import * as v_deserialize from "astn-core/dist/implementation/manual/schemas/parse_tree/refiners/list_of_characters"
    
    import * as v_unmarshall from "./astn_parse_tree"
    
    export const Position: t_signatures.Position = ($, abort, $p) => v_unmarshall.Position(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Range: t_signatures.Range = ($, abort, $p) => v_unmarshall.Range(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Format_Options: t_signatures.Format_Options = ($, abort, $p) => v_unmarshall.Format_Options(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Text_Edit: t_signatures.Text_Edit = ($, abort, $p) => v_unmarshall.Text_Edit(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Replace: t_signatures.Replace = ($, abort, $p) => v_unmarshall.Replace(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Format_Result: t_signatures.Format_Result = ($, abort, $p) => v_unmarshall.Format_Result(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Format_Error: t_signatures.Format_Error = ($, abort, $p) => v_unmarshall.Format_Error(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Format_Parameters: t_signatures.Format_Parameters = ($, abort, $p) => v_unmarshall.Format_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
    
    export const Sort_Alphabetically_Parameters: t_signatures.Sort_Alphabetically_Parameters = ($, abort, $p) => v_unmarshall.Sort_Alphabetically_Parameters(
        v_deserialize.Document(
            $,
            ($) => abort(
                ['parse error', $],
            ),
            {
                'document resource identifier': $p['document resource identifier'],
                'tab size': $p['tab size'],
            },
        )['content'],
        ($) => abort(
            ['unmarshall error', $],
        ),
    )
