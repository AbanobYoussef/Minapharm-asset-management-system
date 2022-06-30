using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities.Hrlpers
{
    public class ResultModel<T> where T : class
    {
        public string Message { get; set; }
        public T Result { get; set; }
        public IEnumerable<T> ResultList { get; set; }
    }
}
