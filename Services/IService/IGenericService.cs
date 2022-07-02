using Entities.Hrlpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Services.IService
{
    public interface IGenericService<T> where T : class
    {
        ResultModel<T> GetALL();

        ResultModel<T> GetById(object id);

        Task<ResultModel<T>> Insert(T entity);
        Task<ResultModel<T>> Update(T entity);
        Task<ResultModel<T>> Delete(object id);
    }
}
