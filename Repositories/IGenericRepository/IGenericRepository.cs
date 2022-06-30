using Entities.Hrlpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.IGenericRepository
{
    public interface IGenericRepository<T> where T : class
    {
        ResultModel<T> GetALL();

        ResultModel<T> GetById(object id);

        ResultModel<T> Insert(T entity);
        ResultModel<T> Update(T entity);
        ResultModel<T> Delete(object id);
    }
}
