using Entities.Context;
using Entities.Hrlpers;
using Microsoft.EntityFrameworkCore;
using Repositories.IGenericRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories.Respository
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private readonly AssetsContext _context;
        private DbSet<T> table = null;

        public GenericRepository(AssetsContext context)
        {
            this._context = context;
            table = _context.Set<T>();
        }


        public ResultModel<T> Delete(object id)
        {
            ResultModel<T> result = new ResultModel<T>();
            try
            {
                result.Result = GetById(id).Result;
                table.Remove(result.Result);
                result.Message = "Entity deleted Successfully";
            }
            catch (Exception e)
            {
                result.Result = null;
                result.Message = e.Message;
            }
            return result;
        }

        public ResultModel<T> GetALL()
        {

            ResultModel<T> result = new ResultModel<T>();
            try
            {
                result.ResultList = table.ToList();
                result.Result  = null;

                result.Message = "Data Retrived Successfully";
            }
            catch (Exception e)
            {
                result.Result = null;
                result.ResultList = null;
                result.Message = e.Message;
            }
            return result;
        }

        public ResultModel<T> GetById(object id)
        {
            ResultModel<T> result = new ResultModel<T>();
            try
            {
                result.Result  = table.Find(id);
                result.ResultList = null;

                result.Message = "Data Retrived Successfully";
            }
            catch (Exception e)
            {
                result.Result = null;
                result.ResultList = null;
                result.Message = e.Message;
            }
            return result;
        }

        public ResultModel<T> Insert(T entity)
        {
            ResultModel<T> result = new ResultModel<T>();
            try
            {
                table.Add(entity);
                result.Result = entity;
                result.ResultList = null;
                result.Message = "Entity Added Successfully";
            }
            catch (Exception e)
            {
                result.Result = null;
                result.ResultList = null;
                result.Message = e.Message;
            }
            return result;
            
        }

        public ResultModel<T> Update(T entity)
        {
            ResultModel<T> result = new ResultModel<T>();
            try
            {
                table.Attach(entity);
                _context.Entry(entity).State = EntityState.Modified;
                result.Result = entity;
                result.ResultList = null;
                result.Message = "Entity Udated Successfully";
            }
            catch (Exception e)
            {
                result.Result = null;
                result.ResultList = null;
                result.Message = e.Message;
            }
            return result;
        }
    }
}
