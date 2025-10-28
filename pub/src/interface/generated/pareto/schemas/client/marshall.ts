import * as _pt from 'exupery-core-types'

import * as _i_in from "./data_types/source"
import * as _i_out from "../../core/astn_target"
import * as _i_vs from "./value_serializers"

// **** TYPES

export type _T_Format_Error = (
    $$_: _i_in._T_Format_Error,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Format_Options = (
    $$_: _i_in._T_Format_Options,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Format_Parameters = (
    $$_: _i_in._T_Format_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Format_Result = (
    $$_: _i_in._T_Format_Result,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Position = (
    $$_: _i_in._T_Position,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Range = (
    $$_: _i_in._T_Range,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Replace = (
    $$_: _i_in._T_Replace,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Sort_Alphabetically_Parameters = (
    $$_: _i_in._T_Sort_Alphabetically_Parameters,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

export type _T_Text_Edit = (
    $$_: _i_in._T_Text_Edit,
    $$_p: {
        readonly 'value serializers': _i_vs._T_Value_Serializers
    },
) => _i_out._T_Value

// **** FRIENDLY NAMES FOR THE GLOBAL TYPES

export type Format_Error = _T_Format_Error

export type Format_Options = _T_Format_Options

export type Format_Parameters = _T_Format_Parameters

export type Format_Result = _T_Format_Result

export type Position = _T_Position

export type Range = _T_Range

export type Replace = _T_Replace

export type Sort_Alphabetically_Parameters = _T_Sort_Alphabetically_Parameters

export type Text_Edit = _T_Text_Edit

// **** ALIASES FOR NESTED TYPE WITH PREFIXED ROOT NAMES

export namespace _T_Format_Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Error
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Format_Options {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Options
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Format_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Format_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Position {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Position
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Replace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Replace
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Sort_Alphabetically_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Sort_Alphabetically_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace _T_Text_Edit {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edit
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

// *** ALIASES FOR NESTED TYPES

export namespace Format_Error {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Error
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Format_Options {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Options
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Format_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Format_Result {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Format_Result
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Position {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Position
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Range {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Range
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Replace {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Replace
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Sort_Alphabetically_Parameters {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Sort_Alphabetically_Parameters
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}

export namespace Text_Edit {
    
    export namespace CONTEXT {
    }
    export type CONTEXT = _i_in._T_Text_Edit
    
    export namespace PARAMS {
        
        export namespace value_serializers {
        }
        export type value_serializers = _i_vs._T_Value_Serializers
    }
    
    export namespace RESULT {
    }
    export type RESULT = _i_out._T_Value
}
